<%--
    readonly version
--%><%
%><%@include file="/libs/granite/ui/global.jsp" %><%
%><%@page session="false"
          import="com.adobe.granite.ui.components.AttrBuilder,
                  com.adobe.granite.ui.components.Config,
                  com.adobe.granite.ui.components.Tag" %><%

    Config cfg = cmp.getConfig();

    Tag tag = cmp.consumeTag();
    AttrBuilder attrs = tag.getAttrs();

    String fieldLabel = cfg.get("fieldLabel", String.class);
    String value = cmp.getValue().val(cmp.getExpressionHelper().getString(cfg.get("value", "")));

    if (cmp.getOptions().rootField()) {
        attrs.addClass("coral-Form-fieldwrapper");

        %><span <%= attrs.build() %>><%
        if (fieldLabel != null) {
            %><label class="coral-Form-fieldlabel"><%= outVar(xssAPI, i18n, fieldLabel) %></label><%
        }
        %><span class="coral-Form-field"><%= xssAPI.filterHTML(value) %></span
        ></span><%
    } else {
        %><span <%= attrs.build() %>><%= xssAPI.filterHTML(value) %></span><%
    }
%>