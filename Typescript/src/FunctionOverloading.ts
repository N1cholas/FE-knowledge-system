type Message = {
    id: number,
    type: string,
    content: string
}

const messages: Message[] = [
    {
        id: 1,
        type: 'text',
        content: 'text - id - 1'
    },
    {
        id: 2,
        type: 'image',
        content: 'image - id - 2'
    },
    {
        id: 3,
        type: 'audio',
        content: 'audio - id - 3'
    },
    {
        id: 4,
        type: 'text',
        content: 'text - id - 4'
    },
    {
        id: 5,
        type: 'image',
        content: 'image - id - 5'
    },
    {
        id: 6,
        type: 'text',
        content: 'text - id - 6'
    },
]

function getMessage(id: number): Message
function getMessage(type: string): Message[]

function getMessage(type): Message[] | Message {
    if (typeof type === 'number') {
        return messages.filter(msg => msg.id === type)[0]
    } else {
        return messages.filter(msg => msg.type === type)
    }
}

export default getMessage
