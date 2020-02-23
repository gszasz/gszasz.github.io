/*************************************************
 *  Personal Website
 *  https://gitlab.com/gszasz/gszasz.gitlab.io
 *
 *  JavaScript redirect to https://szasz.space
 **************************************************/

// Get current site hostname
hostname = window.location.hostname;

// Redirect www to non-www
if (hostname.indexOf("www") == 0) {
    window.location = window.location.href.replace("www.","");
}
// Redirect GitLab URL to the domain
else if(hostname.indexOf("gszasz.gitlab.io") == 0) {
    window.location = window.location.href.replace("gszasz.gitlab.io","szasz.space");
}
