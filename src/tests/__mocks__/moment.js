const moment = require.requireActual('moment');

export default (timestampe = 0) => {
    return moment(timestampe);
};