import styled from "styled-components";
import { size, dist } from "../../theme";

export const Header = styled.div`
  display: grid;
  grid-template-rows: 75px 75px 200px;
  color: white;
  padding: ${dist.defItemDistance};
  font-size: ${size.defFontSize};

  .title {
    font-size: ${size.titleFontSize};
  }

  .subtitle {
  }

  .description {
  }
`;

export const Body = styled.div`
  display: grid;
  color: white;
  padding: ${dist.defItemDistance};
  font-size: ${size.defFontSize};

  .title {
  }

  .description {
  }

  .list-title {
  }

  .list-item-container {
    .item {
    }
  }
`;

export const Footer = styled.div`
  display: grid;
  color: white;
  padding: ${dist.defItemDistance};
  font-size: ${size.defFontSize};
`;
