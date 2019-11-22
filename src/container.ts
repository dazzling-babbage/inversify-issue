import 'reflect-metadata'
import { container } from 'inversify-props'
import { Client } from '@/rest/client'
import { Service } from '@/service/service'
import CONTAINER_IDS from './container-ids'

container.addSingleton<Client>(Client, CONTAINER_IDS.Client)
container.addSingleton<Service>(Service, CONTAINER_IDS.Service)

