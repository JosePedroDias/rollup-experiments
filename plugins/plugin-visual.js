/*
embeds visual media
 */

import { resolve, dirname, extname, basename } from "path";
import { readFileSync } from "fs";

const supportedExtensions = ["jpg", "png", "svg"];

const mimeTypes = {
  jpg: "image/jpeg",
  png: "image/png",
  svg: "image/svg+xml",
};

function getSupportedExtension(path) {
  const ext = extname(path).substring(1);
  return supportedExtensions.includes(ext) && ext;
}

export default function pluginVisual() {
  return {
    name: "plugin-visual",
    resolveId(source, importer, options) {
      console.log(`visual resolveId ${source}`, options);
      if (getSupportedExtension(source)) {
        return resolve(dirname(importer), source);
      }
    },
    load(id) {
      console.log(`visual load id:${id}`);
      const ext = getSupportedExtension(id);
      if (ext) {
        const buff = readFileSync(id);

        //if (embed) { // EMBED MODE
          const mime = mimeTypes[ext];
          const b64Data = buff.toString("base64");
          return `const data = 'data:${mime};base64,${b64Data}';
const img = new Image();
img.src = data;
export default img;
//export default data;`;
        /* } else { // SERVE
          const referenceId = this.emitFile({
            type: "asset",
            name: basename(id),
            source: buff,
          });
          return `export default import.meta.ROLLUP_FILE_URL_${referenceId};`;
        } */
      }
      return null;
    }
  };
}
