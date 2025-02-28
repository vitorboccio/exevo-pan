import { endpoints, paths } from 'Constants'
import { buildServerOptions, filterItemData } from './utils'

export default class DrawerFieldsClient {
  static serverDataUrl = `${endpoints.STATIC_DATA}${paths.SERVER_DATA}`

  static rareItemDataUrl = `${endpoints.STATIC_DATA}${paths.ITEMS_DATA}`

  static async fetchServerOptions(): Promise<Option[]> {
    const response = await fetch(this.serverDataUrl)
    const data = (await response.json()) as Record<string, ServerObject>
    const serverArray = Object.values(data)
    const serverOptions = buildServerOptions(serverArray)

    return serverOptions
  }

  static async fetchAuctionedItemOptions(): Promise<RareItemData> {
    const response = await fetch(this.rareItemDataUrl)
    const data = (await response.json()) as RareItemData
    return filterItemData(data)
  }
}
