// path: studio/schemaTypes/index.ts
import blockContent from './blockcontent'
import post from './post'
import project from './project' // Make sure your project schema is imported here

export const schemaTypes = [post, project, blockContent]