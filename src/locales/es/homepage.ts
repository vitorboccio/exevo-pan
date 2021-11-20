export default {
  Meta: {
    title: 'Exevo Pan - Subastas',
    description:
      '¡Filtra y explora los caracteres de Tibia en el Char Bazaar oficial!',
  },
  CharacterGrid: {
    filterButtonLabel: 'Abrir menú de filtros',
    sortingButtonLabel: 'Definir un criterio de clasificación',
    filter: 'filtro',
    filters: 'filtros',
    is: 'está',
    are: 'son',
    active: 'activo',
    noItemsPagination: 'Sin personajes',
    filterDrawerLabel: 'Formulario de filtro',
    descendingSwitchLabel: 'Ordenar en orden descendente',
    descending: 'Decrescente',
    sortModes: {
      auctionEnd: 'Fin de la subasta',
      level: 'Level',
      price: 'Precio',
      priceBidded: 'Precio (apenas com oferta)',
    },
    noAuctionFound: 'Desculpa, no se encontró subasta',
    changeFilters: 'Cambiar filtros',
    notFoundAlt: 'No se encontraron caracteres',
  },
  FilterDrawer: {
    title: 'Filtros',
    resetFilters: 'Resetar filtros',
    searchNicknameLabel: 'Buscar nickname',
    searchNicknameTooltip: "Regex habilitado! Exemplo: ['-.,]",
    vocationLabel: 'Vocación',
    green: 'Verde',
    yellow: 'Amarillo',
    serverLocationLabel: 'Ubicación del servidor',
    serverPlaceholder: 'Elige un servidor',
    minSkillLabel: 'Skill level mínimo',
    imbuementsPlaceholder: 'Seleccione imbuements',
    allImbuementsButton: 'Todos los imbuements',
    rareItemsLabel: 'Items raros',
    rareItemsTooltip:
      'Si un artículo raro no está en esta lista, actualmente no hay subasta para él.',
    rareItemsPlaceholder: 'Escoge uno item',
    allItemsButton: 'Todos los items',
    miscLabel: 'Variados',
    heartEmoji: 'corazón',
    rareNicknamesTooltip:
      "Nicknames con caracteres especiales (äëïöüÿ'-.,), tamaño de 2-3 caracteres y letras mayúsculas consecutivas (e.g XVI)",
    rareNicknamesButton: 'Nicknames raros',
    soulwarTooltip: 'Personajes con nivel 250+ e sin completar la Soul War',
    soulwarButton: 'Soulwar disponible',
    skullEmoji: 'cráneo',
  },
}
