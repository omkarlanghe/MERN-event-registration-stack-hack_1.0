import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table'
import { fetchEvents } from "../../../_actions/eventsActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TouchAppIcon from '@material-ui/icons/TouchApp';
import HomeNavBar from '../../Navigation/HomeNavBar';
import Container from '@material-ui/core/Container';
import { logoutUser } from "../../../_actions/usersActions";
import { Copyright } from '../../Other/Footer';
const drawerWidth = 240;
const useStyles = theme => ({
    depositContext: {
        flex: 1,
    },
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
});
class RegistrationsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (!this.props.auth.isAuthenticated) {
          this.props.history.push("/login");
        }
        this.props.fetchEvents();
        
       
      }
      onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
        this.props.history.push("/");
      };
    render() {
       const {classes}  = this.props;
        const columns = [
            {
                title: "Registration ID",
                field: "_id",
                render: rowData => (
                  <Link href="/registration" to={{pathname:`/registration/${rowData["_id"]}`}} trim="trim">
                <TouchAppIcon /><small> </small>
                </Link>
                  
                ),
               
              },
            {
              title: "Full Name",
              field:"fullName",
              render: rowData => (
                rowData['fullName']
              ),
             
            },
            {
              title: "Email ID",
              field: "email",
              render: rowData => (
               rowData["email"]
              ),
             
            },
            {
              title: "Registration Type",
              field: "registrationType",
              render: rowData => (
              rowData["registrationType"]
              ),
              
            },
            {
                title: "Number of Tickets",
                field: "numberOfTickets",
                render: rowData => (
                rowData["numberOfTickets"]
                ),
               
              },
              {
                title: "Date Registered",
                field: "date",
                render: rowData => (
                  rowData['date']
                ),
               
              },  
           
          ];
        return (
          <div className={classes.root}>
            <HomeNavBar onClick={this.onLogoutClick}/>
            <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
            
             <React.Fragment>
                
                <MaterialTable
          title="Registration List"
          columns={columns}
          data={this.props.events.events}
          
          options={{
            sorting: true,
            filtering: true
          }}
        />
                
            </React.Fragment>
            <Copyright/>
           </Container> 
           </main>
          </div>
           
        );
    }
}
RegistrationsTable.propTypes = {
    auth: PropTypes.object.isRequired,
    fetchEvents:PropTypes.func.isRequired,
    logoutUser:PropTypes.func.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    events: state.events
  });
export default connect(mapStateToProps, { fetchEvents,logoutUser })(withStyles(useStyles)(RegistrationsTable));
