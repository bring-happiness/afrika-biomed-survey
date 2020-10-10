export default {
  title: 'Technique',
  questions: [
    {
      label: 'Oxygène :',
      type: 'none',
      name: 'oxygene-fournisseur-prix-niveau-service',
      otherQuestion: {
        value: 'all',
        questions: [
          {
            label: 'Fournisseur pressenti',
            type: 'text',
            name: 'oxygene-fournisseur',
            labelSize: 'xs'
          },
          {
            label: 'Prix',
            type: 'text',
            name: 'oxygene-prix',
            labelSize: 'xs'
          },
          {
            label: 'Niveau de service',
            type: 'rate',
            name: 'oxygene-niveau-service',
          }
        ]
      }
    },
    {
      label: 'Vide médical : avez-vous des exigences particulières ?',
      type: 'textarea',
      name: 'vide-medical-exigences-particulieres'
    },
    {
      label: 'Traitement d\'air : quelles sont les sections hors bloc concernées par le traitement d\'air ?',
      type: 'textarea',
      name: 'traitement-air-sections-hors-bloc-concernees'
    },
    {
      label: 'Climatisation :où est-elle disponible dans le bâtiment ?',
      type: 'textarea',
      name: 'climatisation-ou-disponible-batiment',
      otherQuestion: {
        value: 'all',
        questions: [
          {
            label: 'Le toit est-il en terrasse pour l\'évacuation d\'air ?',
            type: 'yes-no',
            name: 'climatisation-toit-est-il-en-terrasse-pour-evacuation-air',
            otherQuestion: {
              value: 'no',
              questions: [
                {
                  label: 'Sinon comment e fait l\'évacuation d\'air ?',
                  type: 'textarea',
                  name: 'climatisation-toit-pas-en-terrasse-pour-evacuation-air-comment',
                },
              ]
            }
          },
        ]
      }
    },
    {
      label: 'Traitement d\'air bloc : Hauteur sous plafond pour passage de gaines ?',
      type: 'text',
      name: 'traitement-air-hauteur-sous-plafond-passage-gaines'
    },
    {
      label: 'Revêtements muraux dans le bloc ?',
      type: 'radio',
      name: 'revetements-muraux-dans-bloc',
      values: ['Ciment', 'Béton', 'Contreplaqué', 'Peinture', 'Carrelage'],
      freeOtherValueAllowed: true
    },
    {
      label: 'Pouvez-vous contrôler l\'air qui passe par les fenêtre du bloc : obturation totale, filtrage ?',
      type: 'yes-no',
      name: 'controler-air-fenetre-bloc'
    },
    {
      label: 'Traitement d\'eau : fournir le schéma du circuit de traitement d\'eau de dialyse',
      type: 'upload',
      name: 'traitement-eau-fournir-schema-circuit-traitement-eau-dialyse'
    },
    {
      label: 'Système actuel d\'osmose :',
      type: 'none',
      name: 'systeme-actuel-osmose',
      otherQuestion: {
        value: 'all',
        questions: [
          {
            label: 'Marque',
            type: 'text',
            name: 'systeme-actuel-osmose-marque',
            labelSize: 'xs'
          },
          {
            label: 'Modèle',
            type: 'text',
            name: 'systeme-actuel-osmose-modele',
            labelSize: 'xs'
          },
          {
            label: 'Fournisseur/Installateur',
            type: 'text',
            name: 'systeme-actuel-osmose-fournisseur-installateur',
            labelSize: 'xs'
          }
        ]
      }
    },
    {
      label: 'Pour le bloc au premier étage, le robinet (lavage mains) sera équipé d\'un filtre. Avez-vous une contre-indication à cette solution ?',
      type: 'yes-no',
      name: 'bloc-premier-etage-robinet-equipe-filtre-contre-indication',
      otherQuestion: {
        value: 'yes',
        questions: [
          {
            label: 'Quelle est cette contre-indication ?',
            type: 'text',
            name: 'bloc-premier-etage-robinet-equipe-filtre-contre-indication-description'
          }
        ]
      }
    },
    {
      label: 'Un traitement de l\'eau de ville sera nécessaire au 1er étage, en amont du stérilisateur. Un petit filtre devra être choisi. Avez-vous une contre-indication à cette solution ?',
      type: 'yes-no',
      name: 'traitement-eau-ville-necessaire-premier-etage',
      otherQuestion: {
        value: 'yes',
        questions: [
          {
            label: 'Quelle est cette contre-indication ?',
            type: 'text',
            name: 'bloc-premier-etage-robinet-equipe-filtre-contre-indication-description'
          }
        ]
      }
    },
    {
      label: 'Pouvez-vous décrire l\'emplacement où le stérilisateur pourra être placé ?',
      type: 'text',
      name: 'description-emplacement-sterilisateur-sera-place'
    },
  ]
}