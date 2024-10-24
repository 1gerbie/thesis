import React from 'react';
import { FaCheckCircle, FaExclamationCircle, FaCalendarAlt } from 'react-icons/fa'; 
import './maintenanceSched.scss';

const MaintenanceSchedule = () => {
    return (
        <div className="maintenance-container">
            <h2>Equipment Maintenance Schedule</h2>
            <div className="schedule-table">
                <div className="table-header">
                    <div className="date">Date</div>
                    <div className="task">Task</div>
                    <div className="status">Status</div>
                </div>
                <div className="table-row upcoming">
                    <div className="date">2024-10-30</div>
                    <div className="task">Oil Change</div>
                    <div className="status upcoming">
                        <FaCalendarAlt className="icon" />
                        Upcoming
                    </div>
                </div>
                <div className="table-row completed">
                    <div className="date">2024-10-20</div>
                    <div className="task">Filter Replacement</div>
                    <div className="status completed">
                        <FaCheckCircle className="icon" />
                        Completed
                    </div>
                </div>
                <div className="table-row in-progress">
                    <div className="date">2024-10-25</div>
                    <div className="task">Brake Inspection</div>
                    <div className="status in-progress">
                        <FaExclamationCircle className="icon" />
                        In Progress
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MaintenanceSchedule;