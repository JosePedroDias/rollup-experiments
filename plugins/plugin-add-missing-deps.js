/*
STUPID WIP
adds missing dependency to an existing module
*/
export default function pluginAddMissingDeps() {
    return {
      name: 'plugin-add-missing-deps',
      resolveId(source) {
        //console.log(`addMissingDeps resolveId ${source}`);
        if (source.includes('main.js')) {
          return source;
        }
        return null;
      },
      transform(code, id) {
        //console.log(`addMissingDeps transform code"${code}" id:${id}`);
        if (id.includes('main.js')) {
            return `import './dep2';
${code}`;
        }
        return null;
      }
    };
  }
  