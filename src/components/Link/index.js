import {Link} from 'react-router';
import {colors, fonts} from '../../themes/reaktor';
import styled, {css} from 'styled-components';

const styling = css`
    ${fonts.type.bold}
    color: ${colors.darkGray};
    line-height: 1;
    text-decoration:none;
    padding-bottom:8px;
    &:hover{
        color: ${colors.red};
    }
    &:active{
        color: ${colors.red};
    }
`;
const CustomLink = styled( Link )`
    ${styling}
`;

export default CustomLink;
