import React, {Component} from 'react';

class UserProfile extends Component {
render () {
    return(
<div>
<div class="container"><br/>
    <div class="row profile">
		<div class="col-md-3">
			<div class="profile-sidebar">
				{/* <!-- SIDEBAR USERPIC --> */}
				<div class="profile-userpic">
					<img src="http://keenthemes.com/preview/metronic/theme/assets/admin/pages/media/profile/profile_user.jpg" class="img-responsive" alt=""/>
				</div>
				{/* <!-- END SIDEBAR USERPIC -->
				<!-- SIDEBAR USER TITLE --> */}
				<div class="profile-usertitle">
					<div class="profile-usertitle-name">
						Person Name 
					</div>
					<div class="profile-usertitle-job">
						Developer
					</div>
				</div>
				{/* <!-- END SIDEBAR USER TITLE -->
				<!-- SIDEBAR BUTTONS --> */}
				<div class="profile-userbuttons">
					<button type="button" class="btn btn-success btn-sm">Follow</button>
					<button type="button" class="btn btn-danger btn-sm">Message</button>
				</div>
				{/* <!-- END SIDEBAR BUTTONS -->
				<!-- SIDEBAR MENU --> */}
				<div class="profile-usermenu">
					<ul class="nav">
						<li class="active">
							<a href="#">
							<i class="glyphicon glyphicon-home"></i>
							Overview </a>
						</li>
						<li>
							<a href="#">
							<i class="glyphicon glyphicon-user"></i>
							Account Settings </a>
						</li>
						<li>
							<a href="#" target="_blank">
							<i class="glyphicon glyphicon-ok"></i>
							Favorite Recipes  </a>
						</li>
						<li>
							<a href="#">
							<i class="glyphicon glyphicon-flag"></i>
							My Recipes  </a>
						</li>
					</ul>
				</div>
				{/* <!-- END MENU --> */}
			</div>
		</div>
		<div class="col-md-9">
            <div class="profile-content">
			   Some user related content goes here...
            </div>
		</div>
	</div>
</div>
<center>
<strong>Powered by <a href="http://j.mp/metronictheme" target="_blank">KeenThemes</a></strong>
</center>
<br/>
<br/>
</div>




    )
}



}

export default UserProfile;