import {defineField, defineType} from 'sanity'
import {CaseIcon} from '@sanity/icons'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Project URL',
      description: 'The URL to the live project or repository.',
      type: 'url',
    }),
    defineField({
      name: 'date',
      title: 'Project duration',
      description: 'The time period when the project was active or completed.',
      type: 'string',
    }),
    defineField({
        name: 'description',
        title: 'Description',
        description: 'A brief description of the project.',
        type: 'text',
        rows: 4,
        validation: (rule) => rule.required(),
    }),
    // This field allows for manual sorting in the Sanity Studio.
    // It uses a package that you might need to install: `npm install sanity-plugin-order-documents` in your studio folder
    defineField({
        name: 'orderRank',
        title: 'Order Rank',
        type: 'string',
        hidden: true,
    }),
    // Optional: A slug in case you want to create a detailed page for a project later
    // defineField({
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: 'title',
    //     maxLength: 96,
    //   },
    // }),
  ],
})