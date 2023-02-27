import { Suspense } from 'react';
import styled from 'styled-components';
import Loading from '@/components/Loading';
import RecommendTagSection from './recommendTagSection';

const Title = styled.p`
  margin: 2.2em 0em;
  text-align: center;
  font-size: 14px;
`;

/**
 * @param {{word: string, addTag(tag: string):void}}
 */
export default function Recommend({ word, addTag }) {
  return (
    <>
      <Title>추천 태그</Title>
      <Suspense fallback={<Loading />}>
        <RecommendTagSection word={word} addTag={addTag} />
      </Suspense>
    </>
  );
}