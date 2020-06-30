import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './bottomNav.css'



export default function BottomNav() {


  return (
      <div className="content">
          <div className="add">
              <Fab color="primary" aria-label="add">
                  <AddIcon />
              </Fab>
          </div>
      </div>

  );
}
