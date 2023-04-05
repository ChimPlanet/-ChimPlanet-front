import { DoubleSlashIcon, TrashCanIcon } from '@/common/icons';
import {
  Container,
  Handle,
  Image,
  Content,
  ContentItem,
  ContentItemName,
  ContentItemValue,
  ContentTypo,
  DeleteButton,
} from './BannerSequenceDragItem.style';

function BannerSequenceDragItem({ data, maxLen, seq }) {
  return (
    <Container data-last={maxLen === seq}>
      <Handle children={<DoubleSlashIcon />} />
      <Image></Image>
      <Content>
        <ContentItem>
          <ContentTypo>메인비주얼[{`${seq}/${maxLen}`}]</ContentTypo>
          <DeleteButton children={<TrashCanIcon />} />
        </ContentItem>
        <ContentItem>
          <div>
            <ContentItemName>PC</ContentItemName>
            <ContentItemValue>1060 X 375</ContentItemValue>
          </div>
          <div>
            <ContentItemName>모바일</ContentItemName>
            <ContentItemValue>160 X 375</ContentItemValue>
          </div>
        </ContentItem>
      </Content>
    </Container>
  );
}

export default BannerSequenceDragItem;