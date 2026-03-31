import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'tum-web-lab-4/landing-page',
  },
  singletons: {
    landingPage: singleton({
      label: 'Landing Page',
      path: 'src/content/landingPage/landing-page',
      format: { data: 'json' },
      schema: {
        heroTitle: fields.text({
          label: 'Hero Title',
          defaultValue: 'Саженцы из нашего семейного сада'
        }),
        heroDescription: fields.text({
          label: 'Hero Description',
          multiline: true,
          defaultValue: 'Семена и саженцы более 20 видов здоровых, выращенных с любовью растений по скромной цене. Помогите нам предотвратить заростание и вырастите свой собственный сад.'
        }),
        aboutTitle: fields.text({
          label: 'About Title',
          defaultValue: 'Про нас'
        }),
        aboutParagraph1: fields.text({
          label: 'About Paragraph 1',
          multiline: true,
          defaultValue: 'Мы живём в селе, вдали от города, и ухаживаем за нашим большим садом. В нашем саду растёт множество различных видов растений со всего мира.'
        }),
        aboutParagraph2: fields.text({
          label: 'About Paragraph 2',
          multiline: true,
          defaultValue: 'Как знает любой садовод, растения естественным образом дают молодую поросль. Чтобы сад оставался здоровым и не зарастал, мы аккуратно удаляем часть этих сеянцев. Вместо того чтобы выбрасывать их, мы решили поделиться ими с другими любителями растений по скромным ценам.'
        }),
        aboutParagraph3: fields.text({
          label: 'About Paragraph 3',
          multiline: true,
          defaultValue: 'Каждый сеянец, который вы покупаете, выращен в питательной почве, заботливо взращён в нашем семейном саду и готов прекрасно прижиться у вас.'
        }),
        plantsTitle: fields.text({
          label: 'Plants Title',
          defaultValue: 'Саженцы'
        }),
        plantsSubtitle: fields.text({
          label: 'Plants Subtitle',
          multiline: true,
          defaultValue: 'Здесь представленны все виды растений, саженцы которых у нас есть. Для кустарников цена указана за один саженец с корнями и землёй. Для цветов указана цена за одну луковицу.'
        }),
        plantsNote: fields.text({
          label: 'Plants Note',
          defaultValue: '* Большинство растений можно сажать только в определённое время года.'
        }),

        plantGrid: fields.array(
          fields.object({
            title: fields.text({
              label: 'Category title',
              defaultValue: 'Деревья и кустарники',
            }),
            plants: fields.array(
              fields.object({
                name: fields.text({ label: 'Name', defaultValue: 'Боярышник' }),
                price: fields.text({ label: 'Price', defaultValue: '65 MDL' }),
                description: fields.text({
                  label: 'Description',
                  multiline: true,
                  defaultValue: 'Лекарственный и декоративный',
                }),
                image: fields.text({
                  label: 'Image path (from /public)',
                  defaultValue: '/boyarishnik.png',
                }),
                visible: fields.checkbox({
                  label: 'Visible',
                  defaultValue: true,
                }),
              }),
              { label: 'Plants', itemLabel: (item) => item.fields.name.value || 'Plant' }
            ),
          }),
          { label: 'Plant grid categories', itemLabel: (item) => item.fields.title.value || 'Category' }
        ),
        contactTitle: fields.text({
          label: 'Contact Title',
          defaultValue: 'Контактная информация'
        }),
        contactSubtitle: fields.text({
          label: 'Contact Subtitle',
          multiline: true,
          defaultValue: 'Чтобы узнать больше про наши растения или договориться о встрече, напишите нам!'
        }),
        contactAddress: fields.text({
          label: 'Contact Address',
          defaultValue: 'Vadul lui Vodă, Piața Agricola'
        }),
        contactMobile: fields.text({
          label: 'Contact Mobile',
          defaultValue: '069-60-70-72'
        }),
        contactPhone: fields.text({
          label: 'Contact Phone',
          defaultValue: '022-49-60-89'
        }),
        contactEmail: fields.text({
          label: 'Contact Email',
          defaultValue: 'barbaroshka@rambler.ru'
        }),
      },
    }),
  },
});
