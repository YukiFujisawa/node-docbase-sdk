import { DocBaseResponse } from '../DocBaseResponse';
import { RequestMethods } from '../enums/RequestMethods';


export interface IResources<ENTITY> {
  /**
   * ID search / ID検索
   * @param {number} id
   * @returns {Promise<DocBaseResponse>}
   */
  find(id: number): Promise<DocBaseResponse>;

  /**
   * Conditional search / 条件検索
   * @param condition
   * @returns {Promise<DocBaseResponse>}
   */
  list(condition: any): Promise<DocBaseResponse>;

  /**
   * Update / 更新
   * @param {number} id
   * @param entity
   * @returns {Promise<DocBaseResponse>}
   */
  update(entity: ENTITY): Promise<DocBaseResponse>;

  /**
   * Create / 作成
   * @param entity
   * @returns {Promise<DocBaseResponse>}
   */
  create(entity: ENTITY): Promise<DocBaseResponse>;

  /**
   * Delete / 削除
   * @param {number} id
   * @returns {Promise<DocBaseResponse>}
   */
  delete(id: number): Promise<DocBaseResponse>;

  /**
   * Get Api Url
   * @returns {Promise<string>}
   */
  getApiUrl(apiUri: string, params: any): Promise<string>;

  /**
   * Send Request
   * @param {RequestMethods} reqMethod
   * @param params
   * @param entity
   * @returns {Promise<DocBaseResponse>}
   */
  sendRequest(reqMethod: RequestMethods, apiUri: string, params: any, entity: ENTITY): Promise<DocBaseResponse>;
}
