import React from 'react';
import PropTypes from 'prop-types';
import { Box, List, ListItem, ListItemText } from '@mui/material';

const BasicList = ({ data }) => {
  return (
    <Box>
      <nav aria-label='secondary folders'>
        <List >
          <ListItem
            disablePadding
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
            }}>
            {data && data.length !== 0 ?
              data.map(item =>
                <ListItemText
                  primary={item.label}
                  style={{
                    color: '#808080',
                    cursor: 'pointer'
                  }}
                  key={item.key}
                />
              )
              :
              null
            }
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

BasicList.propTypes = {
  data: PropTypes.array.isRequired
};

export default BasicList;