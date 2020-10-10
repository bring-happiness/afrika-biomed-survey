export default {
  title: 'Déchets',
  questions: [
    {
      label: 'Quelles sont les futures exigences en matière de traitement des déchets ?',
      type: 'textarea',
      name: 'futures-exigences-matiere-traitement-dechets'
    },
    {
      label: 'Existe-t-il un circuit propre et un circuit sale ?',
      type: 'yes-no',
      name: 'existe-circuit-propre-circuit-sale'
    },
    {
      label: 'Le personnel est-il bien formé aux protocole d\'hygiène ?',
      type: 'yes-no',
      name: 'existe-circuit-propre-circuit-sale'
    },
    {
      label: 'Quel est le temps de remplissage des différents containers par types de déchets ?',
      type: 'text',
      name: 'temps-remplissage-differents-containers-types-dechets'
    },
    {
      label: 'Quel est le temps de rotation du ramassage des déchets ?',
      type: 'text',
      name: 'temps-ramassage-dechets'
    },
    {
      label: 'Eaux usées : quelles seront les futures exigences en matière de traitement des eaux usées ?',
      type: 'textarea',
      name: 'eaux-usees-futures-exigences-traitement-eaux-usees'
    },
    {
      label: 'Avez-vous des exigences particulières sur la solution à rechercher ?',
      type: 'textarea',
      name: 'exigences-particulieres-solution-rechercher'
    },
  ]
}