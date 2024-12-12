import React from "react";
import "./style.scss";

const Settings = () => {
    return (
    <div className="settings">
        <h2>Account Settings</h2>

        {/* Account Information */}
        <section className="account-info">
        <div className="profile-picture">
            <img src="https://via.placeholder.com/100" alt="Profile" />
        </div>
        <div className="form-group">
            <label>Display Name</label>
            <input type="text" placeholder="Name" />
        </div>
        <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="Username" />
        </div>
        <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Email" />
        </div>
        <div className="form-group">
            <label>Phone Number</label>
            <input type="text" placeholder="Phone Number" />
        </div>
        <div className="form-group">
            <label>Country/Region</label>
            <input type="text" placeholder="Country/Region" />
        </div>
        <button className="btn-save">Save Changes</button>
        </section>

        {/* Address Information */}
        <section className="addresses">
        <h3>Billing Address</h3>
        <div className="address">
            <div className="form-group">
            <label>First Name</label>
            <input type="text" placeholder="First Name" />
            </div>
            <div className="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Last Name" />
            </div>
            <div className="form-group">
            <label>Address</label>
            <input type="text" placeholder="Address" />
            </div>
            <button className="btn-save">Save Changes</button>
        </div>

        <h3>Shipping Address</h3>
        <div className="address">
            <div className="form-group">
            <label>First Name</label>
            <input type="text" placeholder="First Name" />
            </div>
            <div className="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Last Name" />
            </div>
            <div className="form-group">
            <label>Address</label>
            <input type="text" placeholder="Address" />
            </div>
            <button className="btn-save">Save Changes</button>
        </div>
        </section>

        {/* Change Password */}
        <section className="change-password">
        <h3>Change Password</h3>
        <div className="form-group">
            <label>Current Password</label>
            <input type="password" placeholder="Current Password" />
        </div>
        <div className="form-group">
            <label>New Password</label>
            <input type="password" placeholder="New Password" />
        </div>
        <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm Password" />
        </div>
        <button className="btn-save">Change Password</button>
        </section>
    </div>
    );
};

export default Settings;
