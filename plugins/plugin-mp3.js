/*
serves mp3 files
*/

import { resolve, dirname, basename } from "path";
import { readFileSync } from "fs";

export default function pluginMp3() {
  return {
    name: "plugin-mp3",
    resolveId(source, importer) {
      //console.log(`mp3 resolveId ${source}`);
      if (source.endsWith('.mp3')) {
        return resolve(dirname(importer), source);
      }
    },
    load(id) {
      //console.log(`mp3 load id:${id}`);
      if (id.endsWith('.mp3')) {
        const referenceId = this.emitFile({
          type: "asset",
          name: basename(id),
          source: readFileSync(id),
        });
        return `const audio = new Audio();
audio.src = import.meta.ROLLUP_FILE_URL_${referenceId};
export default audio;`;
      }
      return null;
    }
  };
}
