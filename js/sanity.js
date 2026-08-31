/* Minimal Sanity client + Portable Text renderer, no build step required. */
window.Sanity = (function () {
  var config = {
    projectId: "tpotgl28",
    dataset: "production",
    apiVersion: "2024-01-01",
  };

  function queryUrl(groq) {
    var base = "https://" + config.projectId + ".apicdn.sanity.io/v" + config.apiVersion + "/data/query/" + config.dataset;
    return base + "?query=" + encodeURIComponent(groq);
  }

  function fetchQuery(groq) {
    return fetch(queryUrl(groq)).then(function (res) {
      if (!res.ok) throw new Error("Sanity request failed: " + res.status);
      return res.json();
    }).then(function (json) {
      return json.result;
    });
  }

  // image _ref like "image-<assetId>-<width>x<height>-<format>"
  function urlForImage(ref) {
    if (!ref) return null;
    var parts = ref.replace(/^image-/, "").split("-");
    var format = parts.pop();
    var dimensions = parts.pop();
    var assetId = parts.join("-");
    return "https://cdn.sanity.io/images/" + config.projectId + "/" + config.dataset + "/" + assetId + "-" + dimensions + "." + format;
  }

  // file _ref like "file-<assetId>-<extension>"
  function urlForFile(ref) {
    if (!ref) return null;
    var parts = ref.replace(/^file-/, "").split("-");
    var extension = parts.pop();
    var assetId = parts.join("-");
    return "https://cdn.sanity.io/files/" + config.projectId + "/" + config.dataset + "/" + assetId + "." + extension;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  var MARK_TAGS = {
    strong: "strong",
    em: "em",
    code: "code",
    underline: "u",
    "strike-through": "s",
  };

  function renderSpan(span, markDefs) {
    var text = escapeHtml(span.text || "").replace(/\n/g, "<br>");
    var marks = span.marks || [];
    return marks.reduce(function (html, markKey) {
      if (MARK_TAGS[markKey]) {
        var tag = MARK_TAGS[markKey];
        return "<" + tag + ">" + html + "</" + tag + ">";
      }
      var def = (markDefs || []).find(function (d) { return d._key === markKey; });
      if (def && def._type === "link" && def.href) {
        return '<a href="' + escapeHtml(def.href) + '" target="_blank" rel="noopener noreferrer">' + html + "</a>";
      }
      return html;
    }, text);
  }

  var STYLE_TAGS = {
    normal: "p",
    h2: "h2",
    h3: "h3",
    blockquote: "blockquote",
  };

  function renderBlock(block) {
    var tag = STYLE_TAGS[block.style] || "p";
    var inner = (block.children || []).map(function (span) {
      return renderSpan(span, block.markDefs);
    }).join("");
    return "<" + tag + ">" + inner + "</" + tag + ">";
  }

  function renderImage(node) {
    var ref = node.asset && node.asset._ref;
    var url = urlForImage(ref);
    if (!url) return "";
    var caption = node.alt ? "<figcaption>" + escapeHtml(node.alt) + "</figcaption>" : "";
    return '<figure><img src="' + url + '" alt="' + escapeHtml(node.alt || "") + '" loading="lazy">' + caption + "</figure>";
  }

  function renderEmbed(node) {
    if (!node.html) return "";
    return '<div class="embed">' + node.html + "</div>";
  }

  // Renders an array of Portable Text blocks (richContent / contact content) to an HTML string.
  function renderPortableText(blocks) {
    if (!blocks || !blocks.length) return "";
    return blocks.map(function (node) {
      if (node._type === "block") return renderBlock(node);
      if (node._type === "image") return renderImage(node);
      if (node._type === "embed") return renderEmbed(node);
      return "";
    }).join("\n");
  }

  return {
    config: config,
    fetchQuery: fetchQuery,
    urlForImage: urlForImage,
    urlForFile: urlForFile,
    renderPortableText: renderPortableText,
    escapeHtml: escapeHtml,
  };
})();
