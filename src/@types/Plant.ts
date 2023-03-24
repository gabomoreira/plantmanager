export interface PlantProps {
    id: number
    name: string
    about: string
    water_tips: string
    photo: string
    environments: [string]
    frequency: {
        times: number
        repeat_every: string
    }
}

export interface PlantSaveProps extends PlantProps {
    dateTimeNotification: Date
}