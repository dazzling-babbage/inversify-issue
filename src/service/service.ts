import { inject, injectable } from 'inversify-props';
import CONTAINER_IDS from '@/container-ids'
import {Client} from '@/rest/client';

@injectable()
export class Service {
    @inject(CONTAINER_IDS.Client) private client!: Client
}
