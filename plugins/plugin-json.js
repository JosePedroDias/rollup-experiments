import { extname } from 'path'

/*
bundles json
*/

function isSupported(url) {
    const ext = extname(url).substring(1);
    return ext === 'json';
}

export default function pluginJson() {
    return {
      name: 'plugin-json',
      transform(code, id) {
        //console.log(`json transform id:${id}`);
        
        if (isSupported(id)) {
            return `const data = ${code};
export default data;`;
        }
        return null;
      }
    };
  }
  