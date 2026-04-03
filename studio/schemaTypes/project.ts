import {defineField, defineType} from 'sanity'
import {CaseIcon} from '@sanity/icons'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: CaseIcon,
  orderings: [orderRankOrdering],
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
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      description: 'Leave blank if the project is ongoing (shows as "Present").',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
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
    orderRankField({type: 'project'}),
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