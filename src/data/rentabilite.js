export default {
  title: 'Rentabilité',
  questions: [
    {
      label: 'Données sanitaires : quelles sont les grandes pathologies rénales recensées au Bénin et prises en charge par Unidial ?',
      type: 'text',
      name: 'donnees-sanitaires-pathologies-renales-benin'
    },
    {
      label: 'Officiellement, combien de patients entreprennent un parcours de soin et quelle proportion arrive chez Unidial. Décrivez leur parcours.',
      type: 'textarea',
      name: 'combien-patients-entreprennent-parcours-soin'
    },
    {
      label: 'Décrivez le dispositif national de soutien aux déficients rénaux au Bénin. Et indiquez comment Unidial s\'y insère.',
      type: 'textarea',
      name: 'dispositif-national-deficients-renaux-benin'
    },
    {
      label: 'Quelles sont les prestations assurées par Unidial dans le cas de débordements du CNHU ?',
      type: 'text',
      name: 'prestations-assurees-unidal-debordements-cnhu',
      otherQuestion: {
        value: 'all',
        questions: [
          {
            label: 'La convention est-elle formalisée?',
            type: 'yes-no',
            name: 'convention-formalisee',
          }
        ]
      }
    },
    {
      label: 'Quelle est l\'étendue de la couverture (hémodialyse, médicaments, ...) de la dialyse par l’État : pour les fonctionnaires, pour les indigents, pour les autres ?',
      type: 'textarea',
      name: 'etendue-couverture-dialyse-fonctionnaires-indigents'
    },
  ]
}