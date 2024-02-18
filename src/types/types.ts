
export type SubDataType = {
    name:string,
    url: string  
}

export type PokeTypesType = {
    slot: number,
    type: SubDataType
}

export type LanguageType = {
    name: string,
    language: SubDataType
}

export type VersionGroupDetailsType = {
    level_learned_at: number,
    move_learn_method: SubDataType,
    version_group: SubDataType
}

export type MovementType = {
    move: SubDataType,
    version_group_details: VersionGroupDetailsType[]
}

export type MovementDetailsType = {
    id: number,
    accuracy : number,
    names: LanguageType[],
    power: number,
    pp: number,
    type: SubDataType
}

export type PokeType = {
    moves: MovementType[]
    names: LanguageType[]
    species: SubDataType,
    sprite: string,
    types: PokeTypesType[],
    weight: number
  
}

export type DescriptionType = {
    name: string,
    color: string,
    habitat: string,
    description: string,
    order: number
}

export type PokeSliceType = {
    pokemon: PokeType,
    descriptionData: DescriptionType,
    movementsData: MovementDetailsType[],
    errorMessage : string | undefined,
    loadingPokemon: boolean,
    loadingDescription: boolean,
    loadingMovements: boolean
}


export type PokeCardType = {
    pokemon: PokeType
}

export type PokeInfoProps = {
    children: () => boolean | JSX.Element
}


export type PokeButtonsProps = {
    props: {isDescriptionActive: boolean, isMovementActive: boolean
        onSetDescriptionActive: () => void, onSetMovementActive: () => void}
}


export type FlavorTextEntriesType = {
    flavor_text: string,
    language: { name: string },
    version: { name: string }
}