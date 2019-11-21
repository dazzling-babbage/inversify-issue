import 'reflect-metadata'
import { container } from 'inversify-props'

import { Client } from '@/rest/client'
import { Service } from '@/service/service'

const CONTAINER_IDS = {
    Client: 'Client',
    Service: 'Service'
}

container.addSingleton<Client>(Client, CONTAINER_IDS.Client)
container.addSingleton<Service>(Service, CONTAINER_IDS.Service)

export default CONTAINER_IDS
