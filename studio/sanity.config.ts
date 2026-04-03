import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {orderRankField, orderRankLinksCustomDetails} from 'sanity-plugin-order-documents'

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
            orderRankLinksCustomDetails({type: 'project', S, context, title: 'Projects (Sortable)'}),
            // Custom orderable list for Experience
            orderRankLinksCustomDetails({type: 'experience', S, context, title: 'Experience (Sortable)'}),
            S.divider(),
            // All other types
            ...S.documentTypeListItems().filter(
              (item) => !['project', 'experience'].includes(item.getId() ?? ''),
            ),
          ]),
    }),
    visionTool(),
    orderRankField(),
  ],

  schema: {
    types: schemaTypes,
  },
})
