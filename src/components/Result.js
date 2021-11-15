import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const Result = () => {

    const flightdata = useSelector(state => state?.filteredData.flightDetails);
    const filterdata = useSelector(state => state);

    console.log(flightdata);

    let finalData;
    let dataFlag = false;

    if (flightdata) {
        finalData = flightdata.filter((data) => {
            if (data.sourceCity === filterdata.source && data.destinationCity === filterdata.destination && data.travelDate === filterdata.travel) {
                return data;
            }
            dataFlag = true;
        })
    } else {
        console.log('here');
        dataFlag = false;
    }

    const columns = [{
        dataField: 'flightnumber',
        text: 'Flight Number'
    }, {
        dataField: 'airlineName',
        text: 'Airline Name'
    }, {
        dataField: 'departureTime',
        text: 'Departure Time'
    }, {
        dataField: 'arrivalTime',
        text: 'Arrival Time'
    }, {
        dataField: 'duration',
        text: 'Duration'
    }, {
        dataField: 'stops',
        text: 'No of stops'
    }, {
        dataField: 'price',
        text: 'price'
    }];

    const options = {
        paginationSize: 5,
        pageStartIndex: 1,
        sizePerPage: 5
    }

    return (
        <div className='container'>
            <div className='row'>
                <section>
                    {dataFlag ?
                        <div>
                            <p>Total number of records: {finalData.length}</p>
                            <BootstrapTable keyField='flightnumber' data={finalData} columns={columns} pagination={paginationFactory(options)} />
                        </div> :
                        <div>
                            <p>Total number of records: 0</p>
                            <BootstrapTable keyField='flightnumber' data={[]} columns={columns} />
                        </div>
                    }
                </section>
            </div>
        </div>
    )
}

export default withRouter(Result);