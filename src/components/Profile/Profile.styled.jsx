import styled from '@emotion/styled';

export const ProfileBox = styled.div`
  width: 400px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  margin-bottom: 44px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 200px;
  heigh: 200px;
  margin: 50px auto;
  border-radius: 6px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: #f5f5dc;
`;
export const Name = styled.p`
  margin-bottom: 25px;
  font-size: 20px;
  font-weight: 800;
  color: #022520;
`;

export const Tag = styled.p`
  margin-bottom: 30px;
  font-size: 33px;
  font-weight: 600;
  color: #02252090;
`;

export const Location = styled(Tag)``;

export const Stats = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 0;
  border: 1px solid #05413780;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: #f5f5dc;
`;

export const Label = styled.span`
  font-size: 25px;
  font-weight: 600;
  color: #000;
`;

export const Quantity = styled.span`
  font-size: 22px;
  font-weight: 800;
  color: #000;
`;
