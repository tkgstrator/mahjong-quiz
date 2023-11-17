<template>
  <IonPage>
    <IonTabs>
      <IonRouterOutlet></IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="quiz" href="/quiz">
          <IonIcon aria-hidden="true" :icon="triangle" />
          <IonLabel>問題</IonLabel>
        </IonTabButton>

        <IonTabButton tab="create" href="/create">
          <IonIcon aria-hidden="true" :icon="ellipse" />
          <IonLabel>作成</IonLabel>
        </IonTabButton>

        <IonTabButton tab="settings" href="/settings">
          <IonIcon aria-hidden="true" :icon="square" />
          <IonLabel>設定</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonPage>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
</script>
