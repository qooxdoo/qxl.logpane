/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2011 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (martinwittemann)

************************************************************************ */

qx.Class.define("qxl.logpane.Application", {
  extend: qx.application.Standalone,

  members: {
    main() {
      super.main();

      var view = new qxl.logpane.LogPane();
      this.getRoot().add(view, { edge: 0 });
      view.fetch();

      window.setInterval(function () {
        qx.log.Logger.debug(new Date() + " printing new log message.");
        view.fetch();
      }, 1000);
    },
  },
});
