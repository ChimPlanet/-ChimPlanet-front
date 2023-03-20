import { select } from '@/service/domain.decorator';
import { Offer, OfferContent } from '@/service/offer';
import HttpClient from './http-client';
import mock_job_offers from '@/__mocks__/mock_job_offers';

class OfferClient extends HttpClient {
  constructor() {
    super('OfferService', '/boards');
  }

  @select(typeOfferArray)
  async recent() {
    return await this.get('/new');
  }

  @select(typeOfferArray)
  async popular() {
    return mock_job_offers;
  }

  @select(typeOfferArray)
  async official() {
    return mock_job_offers;
  }

  @select(OfferContent)
  async content(id) {
    return await this.get('/' + id);
  }

  /**
   * ! 추후 수정
   * @param {*} id
   * @returns
   */
  @select(Offer)
  async byMultipleId(ids) {
    return '';
  }
}

function typeOfferArray(values) {
  return values.map(Offer);
}

export default OfferClient;
