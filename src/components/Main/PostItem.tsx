import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import ProfileImage from 'components/Main/ProfileImage';

interface PostItemProps {
  title: string;
  date: string;
  categories: string[];
  summary: string;
  thumbnail: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
  link: string;
  profileImage: FluidObject;
}

const PostItemWrapper = styled(Link)`
  margin-bottom: 48px;
`;

const PostCard = styled.div`
  justify-content: space-between;
  display: flex;
`;

const SubContent = styled.div`
  display: flex;
  align-items: center;
`;

const ThumbnailImage = styled(Img)`
  width: 200px;
  aspect-ratio: auto 200 / 134;
  height: 134px;
`;

const PostItemContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const Title = styled.h1`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 3px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 20px;
`;

const Date = styled.h2`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
  padding-right: 10px;
`;

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin: 10px -5px;
`;

const CategoryItem = styled.div`
  margin: 2.5px 5px;
  padding: 3px 5px;
  border-radius: 3px;
  background: black;
  font-size: 14px;
  font-weight: 700;
  color: white;
`;

const Summary = styled.div`
  display: ${props => (props.act ? '-webkit-box' : '')};
  overflow: hidden;
  margin-top: ${props => (props.act ? 'auto' : '')};
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  opacity: 0.8;
`;

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  categories,
  summary,
  thumbnail,
  link,
  profileImage,
}) {
  const active = thumbnail === null ? false : true;
  return (
    <PostItemWrapper to={link}>
      <PostCard>
        <ProfileImage profileImage={profileImage} />
        <PostItemContent>
          <Title>{title}</Title>
          <Summary act={active}>{summary}</Summary>
          <SubContent>
            <Date>{date}</Date>
            <Category>
              {categories.map(item => (
                <CategoryItem key={item}>{item}</CategoryItem>
              ))}
            </Category>
          </SubContent>
        </PostItemContent>

        {thumbnail === null ? (
          ''
        ) : (
          <ThumbnailImage
            fluid={thumbnail.childImageSharp.fluid}
            alt="Post Item Image"
          />
        )}
      </PostCard>
    </PostItemWrapper>
  );
};

export default PostItem;
