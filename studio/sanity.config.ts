import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default defineConfig({
  name: 'default',
  title: 'kp-personal-website',

  projectId: '1safb7qx',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Content')
          .items([
            // Custom orderable list for Projects
            orderableDocumentListDeskItem({type: 'project', title: 'Projects (Sortable)', S, context}),
            // Custom orderable list for Experience
            orderableDocumentListDeskItem({type: 'experience', title: 'Experience (Sortable)', S, context}),
            S.divider(),
            // All other types
            ...S.documentTypeListItems().filter(
              (item) => !['project', 'experience'].includes(item.getId() ?? ''),
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
