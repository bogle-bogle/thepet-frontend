import React from 'react';
import { useNavigate } from 'react-router';
import { AddBtn, NoDataContainer, SadHeendy } from './nodatabox.style';
import sadheendy from '../../assets/custom/sadheendy.png';
import { jwtCheck } from '../../utils/tokenCheck';
import { loginAction } from '../../feature/member/login';
import { useDispatch } from 'react-redux';
import { showRequiredLoginSwal } from './showRequiredLoginSwal';
function NoDataBox(props) {
  const { dataType, addButtonText, link } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddPet = () => {
    if (jwtCheck()) {
      showRequiredLoginSwal(() => dispatch(loginAction.setIsLogin(true)));
    } else {
      navigate(link);
    }
  };

  return (
    <NoDataContainer>
      <SadHeendy src={sadheendy} alt=" " />
      <p className="nopet-message">저장된 {dataType} 정보가 없네요 😥</p>
      <AddBtn onClick={handleAddPet}>{addButtonText}</AddBtn>
    </NoDataContainer>
  );
}

export default NoDataBox;
