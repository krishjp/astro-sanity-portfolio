import {defineField, defineType} from 'sanity'
import {AddUserIcon} from '@sanity/icons'
import blockcontent from './blockcontent'

export default defineType({
  name: 'experience',
  title: 'Work Experience',
  type: 'document',
  icon: AddUserIcon,
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'companyUrl',
      title: 'Company URL',
      type: 'url',
    }),
    defineField({
        name: 'startDate',
        title: 'Start Date',
        type: 'date',
        options: {
            dateFormat: 'MMMM, YYYY'
        }
    }),
    defineField({
        name: 'endDate',
        title: 'End Date',
        description: 'Leave blank if this is your current position.',
        type: 'date',
        options: {
            dateFormat: 'MMMM, YYYY'
        }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'A brief description or bullet points about your role.',
      type: 'string',
    }),
    defineField({
      name: 'richText',
      title: 'richText',
      description: 'description with rich text',
      type: 'blockContent',
    }),
    defineField({
        name: 'orderRank',
        title: 'Order Rank',
        type: 'string',
        hidden: true,
    }),
  ],
  preview: {
    select: {
      title: 'jobTitle',
      subtitle: 'company',
    },
  },
})
