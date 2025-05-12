import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

export const StyledLink = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.main,
    '&:hover': {
      textDecoration: 'underline',
    },
  }));