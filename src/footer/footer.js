import React from "react";
import "./footer.scss";
import {
  Button,
  IconButton,
  Link,
  Typography,
  Divider
} from "@material-ui/core";

export default function footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <IconButton
            edge="end"
            className="footer-logo-butn"
            color="inherit"
            aria-label="menu"
          >
            <img
              src="https://cfbcnow.org/images/logo_white_trans.png"
              alt="CFBC"
            />
          </IconButton>
        </div>
        <div className="footer-links">
          <Typography component={"div"} className=""></Typography>
        </div>
        <div className="footer-social">
          <i class="fab fa-facebook" />
          <i class="fab fa-twitter" />
          <i class="fas fa-wifi" />
          <i class="fab fa-google-plus" />
        </div>
      </div>
      <Divider light="true" variant="middle" className="footer-divider" />
      <div className="footer-copy">
        <Typography
          variant="caption"
          align="center"
          display="block"
          gutterBottom
        >
          &copy;Copyright. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
}
