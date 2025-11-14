import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {SectionType} from '../../../models';

@Component({
  selector: 'app-section-selector',
  imports: [],
  templateUrl: './section-selector.component.html',
  styleUrl: './section-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionSelectorComponent {
  @Input() currentSection: SectionType = SectionType.APPLICATION;
  @Output() sectionChanged = new EventEmitter<SectionType>();

  sectionTypes = SectionType;

  selectSection(section: SectionType) {
    if (this.currentSection !== section) {
      this.currentSection = section;
      this.sectionChanged.emit(section);
    }
  }

  getCurrentSectionLabel(): string {
    return this.currentSection === SectionType.APPLICATION
      ? 'Tipos de Aplicación'
      : 'Categorías';
  }
}
