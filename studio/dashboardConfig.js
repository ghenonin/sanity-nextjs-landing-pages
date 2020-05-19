export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec3ce995f647be407ff701f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4kojmatw',
                  apiId: 'b85013cb-cada-4c2a-badb-1d819908bdcc'
                },
                {
                  buildHookId: '5ec3ce998cb5849fe287117a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-phpc4fdx',
                  apiId: '1f18bbf7-5e81-42ec-897c-bfa96291b845'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ghenonin/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-phpc4fdx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
