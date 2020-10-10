export default {
  title: 'Architecture',
  questions: [
    {
      label: 'Les dalles de fondation et d\'étages sont-elles assez solides pour accueillir des équipements lourds ?',
      type: 'yes-no',
      name: 'archi-dalles-solides-equipements-lourds'
    },
    {
      label: 'Connaissez-vous les matériaux utilisés, leur solidité et leur durée de vie ?',
      type: 'yes-no',
      name: 'archi-materiaux-solidites-duree-vie'
    },
    {
      label: 'Possédez-vous les plans 2D des sections de chaque étage ?',
      type: 'yes-no',
      name: 'archi-possession-plan-2d',
      hasFile: {
        value: 'yes',
        label: 'Veuillez fournir les plans 2D des sections de chaque étage'
      }
    },
    {
      label: 'Possédez-vous les plans de l\'ascenseur, en particulier les dimensions portes ouvertes et le poids de chargement maximum ?',
      type: 'yes-no',
      name: 'archi-plan-ascenseur',
      hasFile: {
        value: 'yes',
        label: 'Veuillez fournir les plans de l\'ascenseur, avec les dimensions portes ouvertes et le poids de chargement maximum'
      }
    },
    {
      label: 'Passage dans les escaliers : pouvez-vous estimer la taille d\'un colis pouvant être monté par l\'escalier ou l\'encombrement maximum ?',
      type: 'text',
      name: 'archi-escaliers-taille-colis-encombrement-max'
    },
    {
      label: 'Revue des huisseries : taille des ouvertures, portes et fenêtres, types de fenêtres et de portes et dimensions.',
      type: 'textarea',
      name: 'archi-huisseries-ouverture-porte-fenetre'
    },
    {
      label: 'Circulation du public : avez-vous préparé la circulation du public et du personnel dans la configuration cible (néphro, cardio, diabéto, bloc, réveil,...) ?',
      type: 'text',
      name: 'archi-circulation-public-personnel'
    },
    {
      label: 'Avez-vous le plan des gaines techniques : air, eau, élec. ?',
      type: 'yes-no',
      name: 'archi-plan-gaines-technique',
      hasFile: {
        value: 'yes',
        label: 'Veuillez fournir les plans des gaines techniques (air, eau, élec.)'
      }
    },
    {
      label: 'Quel est le type et la puissance de l\'armoire électrique ?',
      type: 'text',
      name: 'archi-puissance-armoire-electrique'
    },
    {
      label: 'Possédez-vous les plans des circuits électriques et la position des prises ?',
      type: 'yes-no',
      name: 'archi-plan-circuits-electriques-position-prises',
      hasFile: {
        value: 'yes',
        label: 'Veuillez fournir les plans des circuits électriques et la position des prises'
      }
    },
    {
      label: 'Pour chaque prise, préciser la puissance et si elle est reliée à la terre.',
      type: 'multiple-infinite',
      labelEachValue: 'Prise',
      name: 'archi-toutes-prises-puissance-reliee-terre',
      values: {
        puissance: {
          label: 'Puissance',
          type: 'text',
          name: 'puissance',
          labelSize: 'xs'
        },
        relieAlaTerre: {
          label: 'La prise est reliée à la terre ?',
          type: 'yes-no',
          name: 'reliee-terre',
        }
      }
    },
    {
      label: 'Avez-vous mis en place un circuit de secours (type groupe électrogène) ?',
      type: 'yes-no',
      name: 'archi-circuit-secours',
      otherQuestion: {
        value: 'yes',
        questions: [
          {
            label: 'Marque',
            type: 'text',
            name: 'archi-circuit-secours-marque',
            labelSize: 'xs'
          },
          {
            label: 'Puissance',
            type: 'text',
            name: 'archi-circuit-puissance',
            labelSize: 'xs'
          },
          {
            label: 'Capacité',
            type: 'text',
            name: 'archi-circuit-capacite',
            labelSize: 'xs'
          },
          {
            label: 'Est-il suffisant à l\'heure actuelle ?',
            type: 'yes-no',
            name: 'archi-circuit-suffisant',
            labelSize: 'xs'
          }
        ]
      }
    },
    {
      label: 'Protection électrique et secours : l\'alimentation électrique est-elle protégée par des onduleurs ?',
      type: 'yes-no',
      name: 'archi-protection-electrique-secours',
      otherQuestion: {
        value: 'yes',
        questions: [
          {
            label: 'Cette solution est-elle suffisante ?',
            type: 'yes-no',
            name: 'archi-protection-electrique-secours-suffisante'
          }
        ]
      }
    },
    {
      label: 'Quelle est la qualité perçue de l\'eau de ville à l\'emplacement du bâtiment ?',
      type: 'rate',
      name: 'archi-qualite-eau-ville-batiment'
    },
    {
      label: 'Quelle est la pression d\'entrée dans le bâtiment ?',
      type: 'text',
      name: 'archi-pression-entree-batiment',
      otherQuestion: {
        value: 'all',
        questions: [
          {
            label: 'La pression est insuffisante et une pompe intermédiaire est nécessaire ?',
            type: 'yes-no',
            name: 'archi-pression-entree-batiment-suffisante'
          }
        ]
      }
    },
    {
      label: 'Eau chaude sanitaire, est-elle disponible ?',
      type: 'yes-no',
      name: 'archi-eau-chaude-sanitaire-disponible',
      otherQuestion: {
        value: 'yes',
        questions: [
          {
            label: 'Comment est obtenue l\'eau chaude ? Ballon (son volume) ou chauffe-eau (puissance et emplacement).',
            type: 'text',
            name: 'archi-eau-chaude-sanitaire-disponible-obtention'
          }
        ]
      }
    }
  ]
}