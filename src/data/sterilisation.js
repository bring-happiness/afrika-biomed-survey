export default {
  title: 'Stérilisation',
  questions: [
    {
      label: 'Niveau de stérilisation visé ?',
      type: 'radio',
      name: 'niveau-sterilisation-vise',
      values: ['Normes françaises', 'Normes locales'],
      freeOtherValueAllowed: true
    },
    {
      label: 'En fonction des interventions pratiquées, faut-il prévoir un sas de décontamination avec robinet ?',
      type: 'yes-no',
      name: 'interventions-pratiquees-prevoir-sas-decontamination-robinet'
    },
    {
      label: 'Faut-il aménager une arrivée d\'eau près du bloc ?',
      type: 'yes-no',
      name: 'amenager-arrivee-eau-pres-bloc'
    },
    {
      label: 'L\'évacuation d\'eaux usées est-elle déjà présente ?',
      type: 'yes-no',
      name: 'evacuation-eaux-usees-deja-presente'
    },
    {
      label: 'Le courant est-il disponible dans la salle de stérilisation ?',
      type: 'yes-no',
      name: 'courant-disponible-salle-sterilisation',
      otherQuestion: {
        value: 'yes',
        questions: [
          {
            label: 'Quelle est la puissance disponible ?',
            type: 'text',
            name: 'courant-disponible-salle-sterilisation-puissance-disponible'
          }
        ]
      }
    },
    {
      label: 'Faut-il acheter du mobilier pour le matériel stérilisé ?',
      type: 'yes-no',
      name: 'acheter-mobilier-materiel-sterilise'
    },
  ]
}