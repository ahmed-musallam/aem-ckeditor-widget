<%--
    a widget for CKEditor
--%><%
%><%@include file="/libs/granite/ui/global.jsp" %><%
%><%@page session="false"
          import="com.adobe.granite.ui.components.AttrBuilder,
                  com.adobe.granite.ui.components.Config,
                  com.adobe.granite.ui.components.Field,
                  com.adobe.granite.ui.components.Tag" %><%

    Config cfg = cmp.getConfig();
    ValueMap vm = (ValueMap) request.getAttribute(Field.class.getName());

    Tag tag = cmp.consumeTag();
    AttrBuilder attrs = tag.getAttrs();

    attrs.add("id", cfg.get("id", String.class));
    attrs.addClass(cfg.get("class", String.class));
    attrs.addRel(cfg.get("rel", String.class));
    attrs.add("title", i18n.getVar(cfg.get("title", String.class)));

    attrs.add("type", "text");
    attrs.add("name", cfg.get("name", String.class));
    attrs.add("placeholder", i18n.getVar(cfg.get("emptyText", String.class)));
    attrs.addDisabled(cfg.get("disabled", false));
    if (cfg.get("required", false)) {
        attrs.add("aria-required", true);
    }

    attrs.addClass("coral-Textfield");

    attrs.addOthers(cfg.getProperties(), "id", "class", "rel", "title", "type", "name", "value", "emptyText", "disabled",
        "required", "fieldLabel", "fieldDescription", "renderReadOnly", "ignoreData");

%><div>
    <textarea type="hidden" <%= attrs.build() %>><%= vm.get("value", String.class) %></textarea>
    <script> CKEDITOR.replace('<%= cfg.get("name", String.class) %>');</script>
</div>
