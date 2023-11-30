/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { Theme, jsx } from "@emotion/react";
import { IconButton, IconButtonProps, Typography } from "@mui/material";

const classes = {
  advancedFeaturesButtonContainer: {
    width: 56
  },
  advancedFeaturesButton: (theme: Theme) => ({
    backgroundColor: theme.palette.primary.light,
    borderRadius: 0,
    paddingLeft: 16,
    paddingRight: 16
  }),
  badge: (theme: Theme) => ({
    backgroundColor: theme.palette.error.dark,
    top: -4,
    borderRadius: 6,
    padding: 6,
    zIndex: 1000
  }),
  defaultBadge: {
    right: -8
  },
  isWritingBadge: {
    right: -48
  },
  badgeText: {
    color: "#fff",
    fontWeight: 600
  }
};

type Props = {
  isWriting?: boolean;
} & IconButtonProps;

const AIButton = ({ isWriting, ...props }: Props) => {
  return (
    <div
      css={classes.advancedFeaturesButtonContainer}
      className="flexCenter positionRelative"
    >
      <IconButton css={classes.advancedFeaturesButton} {...props}>
        <img alt="sparkles" src="/icons/sparkles.svg" />
      </IconButton>

      {!props.disabled && (
        <div
          css={[
            classes.badge,
            isWriting ? classes.isWritingBadge : classes.defaultBadge
          ]}
          className="positionAbsolute"
        >
          <Typography css={classes.badgeText}>
            {isWriting ? "Writting..." : "AI"}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default AIButton;
